# JWT (JSON Web Tokens)
json 포맷을 이용하여 사용자에 대한 속성을 저장하는 claim(사용자 정보나 데이터 속성) 기반 web token
토큰 자체 정보를 사용하는 Self-Contained 방식, 주로 회원 인증이나 정보 전달에 사용 됨

## 구조
: Base64로 인코딩
[Header / Payload / Signature]
Header : Signature 해싱을 위한 알고리즘 지정
Payload : 토큰에서 사용할 정보, Claim이 담겨 있음
Signature : 유효성 검증을 위한 암호화 코드

## Claim
1. Registered Claim : 토큰 표현을 위해 미리 정해진 종류의 데이터
2. Public Claim : 사용자 정의, 공개용 정보를 위한 정보를 저장
3. Private Claim : 사용자 정의, 임의로 지정한 정보를 저장

## 고려사항
- 정보가 많을수록 토큰이 늘어나기 때문에 부하가 발생할 수 있음
- Payload는 디코딩이 가능함으로 중요 데이터는 들어면 안됨
- Stateless, JWT는 생성 후 제어 및 임의 삭제 불가, 토큰 만료를 꼭 넣어주어야 함
- Client에서 관리 한다.

참고페이지 : https://mangkyu.tistory.com/56

<br>

## JWT FLOW
![JWT](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbc2kWC%2FbtqxxKTe6gG%2F8RshG065c2b7fckkpnwtkk%2Fimg.png)
