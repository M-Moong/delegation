




const contents = getNode('.contents');
const textField = getNode('#comment37');
const commentContainer = getNode(".comment_container");

// 누른 대상을 찾기
// 누른 대상의 data-name 값 찾기

function createComment(user, value) {
	const template = /* html */ `
		<div class="id" data-comment-id="${Date.now()}">
				<div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
				<div class="comment_field">
						<div class="text_container">
								<div class="name"><a href="#">${user}</a></div>
								<div class="text_field">${value}</div>
						</div>
				</div>
		</div>
		`
	return template;
}

// 스크롤을 계속 아래로 내려주는 함수
function endScroll(target) {
	target.scrollTop = target.scrollHeight;
	return target.scrollHeight;
}

// input 창의 내용들을 지워주기 위한 함수
// 댓글을 작성하고 남은 텍스트들
function clearContents(target) {

	if (target.nodeName === 'INPUT' || target.nodeName == 'TEXTAREA') {
		
		target.value = ''
		return;
	}

	target.textContent = '';
}




const handleArticle = (e) => {

	let target = e.target;
	let name = target.dataset.name
	
	// name을 가지고 있지 않은 요소를 선택했을때 
	// 타겟의 부모에서 dataset을 가지고 올수 있게끔 while문을 돌려버린다.
	// 하지만 부모의 부모를 찾다가 body를 만나면 Null을 반환시켜 반복문을 끝낸다.
	while (!name) {
		target = target.parentElement;
		name = target.dataset.name
		if (target.nodeName === 'BODY') {
			target = null;
			return;
		}
	}

	
	// 좋아요나 더보기 버튼을 껏다켯다 작동 (active 클래스를 줬다 뺏다)
	if (name === 'like' || name === 'more') toggleClass(target, 'active');
	
	// 댓글 버튼을 부르면 입력창으로 커서 이동.
	if (name === 'comment') textField.focus();

	if (name === 'send') {
		e.preventDefault();

		let value = textField.value;

		if (value === '') return;

		insertLast(commentContainer, createComment("범범", value));

		endScroll(commentContainer);

		clearContents(textField);
	}
}

contents.addEventListener('click',handleArticle)

















