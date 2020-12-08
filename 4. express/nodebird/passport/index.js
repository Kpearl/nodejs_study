const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    // 저장할 데이터 선택
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    // 요청시 실행, session 미들웨어가 호출
    passport.deserializeUser((id, done) => {
        User.findOne({
            where:{ id },
            include: [{
                model: User,
                attributes: ['id', 'nick'],
                as: 'Followers',
            }, {
                model: User,
                attributes: ['id', 'nick'],
                as:'Followings',
            }],
        }).then(user => done(null, user)).catch(err => done(err));
    });
    local(passport);
    kakao(passport);
};