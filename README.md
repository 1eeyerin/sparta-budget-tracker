## TODO LIST

- [x] 목업 추가
- [x] 기능 추가
- [x] tailwind -> styled-component로 변경
- [x] 디자인 시스템 컴포넌트 구축
- [x] shadcn ui 제거
- [x] react-hook-form 제거
- [ ] 렌더링 최적화
- [x] 절대 경로 정리
- [ ] vercel을 통한 배포

## 필수 구현 조건
- [x] 지출 CRUD 구현 (작성, 조회, 수정, 삭제)
- [x] 지출 상세 화면 구현
- [x] styled-components 사용 / props를 통한 조건부 스타일링 적용
    - 인라인 스타일링이나 일반 css 파일을 이용한 스타일링 방식 지양 (이번 과제 한정)
    - 모든 태그를 styled-components 화 할 필요는 없으나 스타일링이 들어가는 경우는 styled-components화 할 것
- [x] react-router-dom 사용하여 라우팅 적용
- [x] useState, useEffect, useRef 사용
- [x] 지출 항목 등록 시 id는 uuid 라이브러리를 이용 
- [ ] props-drilling 작업 & 브랜치 생성
- [ ] context 작업 & 브랜치 생성
- [ ] redux & 브랜치 생성
    - Redux ducks 패턴을 사용하지 않고 Redux Toolkits을 사용
- [x] index.html에 있는 title 변경
- [x] reset.css 코드 적용
- [x] list UI 구현
    - 지출 내역은 딱 한 줄까지만 표현하고, 한 줄이상의 컨텐츠일 경우 말줄임 사용
- [ ] useEffect를 사용하여 월이 변경될 때마다 로컬 스토리지에 값을 저장
- [x] 날짜와 금액에 대해 유효성 검사를 적용
- [x] 수정할 값을 받는 <Input> 을 만들 때 useRef를 사용
- [x] 수정 버튼을 누르면, 기존 지출의 데이터를 수정하고 ‘홈’ 으로 이동
- [ ] 삭제 버튼 클릭 시 즉시 삭제하기 보다는 사용자에게 확인받은 뒤 삭제처리하고 삭제 이후에는 홈으로 이동

## 선택 구현
- [x] Sort 로직을 작성하여 데이터를 시간순 혹은 종류별로 정렬
- [x] src 폴더 기준 절대경로 설정
    - (vite.config.js)  ex)   ../../../../../components/buttons.js  ⇒  @/components/button.js
