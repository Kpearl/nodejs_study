const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Hashtag, User } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();
fs.readdir('uploads', (error) => {
    if(error) {
        console.error('uploads 폴더가 없어 폴더 생성');
        fs.mkdirSync('uploads');
    }
});

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads/');
        },
        filename(req, file, cb) {
            const ext = path.extname(file.originalname); // 기존 확장자
            cb(null, path.basename(file.originalname, ext) + new Date().valueOf + ext); // 파일 이름 중복 방지를 위해 날짜 추가
        },
    }),
    limits: {fileSize: 5*1024*1024},
});
router.post('./img', isLoggedIn, upload.single('img'), (req, res) => {
    // single: 이미지 하나, array: 이미지 하나/속성 여러개, fields : 이미지 여러개/속성 하나 , none : 데이터만
    console.log(req.file);
    res.json({url:`/img/${req.file.filename}`});
});

const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async(req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            img: req.body.url,
            useId: req.user.id,
        });
        const hashtags = req.body.content.match(/#[^\s]*/g);
        if(hashtags) {
        const hashtags = await Promise.all(hashtags.map(tag => Hashtag.findOrCreate({
            where: {title:tag.slice(1).toLowerCase()},
        })));
        await post.addHashtags(result.map(r => r[0]));
    }
    res.redirect('/');
} catch(error) {
    console.error(error);
    next(error);
}
});

module.exports = router;