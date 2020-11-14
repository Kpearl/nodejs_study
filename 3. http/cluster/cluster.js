/*
Cluster : 싱글 스레드인 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈
예기치 못한 경우로 서버가 종료되는 것을 방지하기 위해 클러스터링 적용
*/
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
    console.log(`마스터 프로세스 아이디 : ${process.pid}`); // CPU 개수 만큼 워커 생산
    for(let i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid} 번 워커가 종료`);
        cluster.fork(); //워커 생성
    });
} else {
    http.createServer((req, res) => {
        res.write(`<h1>Hello Node!</h1>`);
        res.end('<p>Hello Cluster!</p>');
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8080);
    console.log(`${process.pid} 번 워커 실행`);
}