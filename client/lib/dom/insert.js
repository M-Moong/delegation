


// beforebegin => inserBefore
// afterbegin  => insertFirst
// beforeend   => inserLast
// afterend    => inserAfter

//& 태그를 삽입하는 유틸함수 

function insertLast(node, text) {
	if (typeof node === 'string') node = getNode(node);
	
	if (node.nodeType !== document.ELEMENT_NODE) {
		throw new Error('inserLast 함수의 첫번째 인수는 ELEMENT NODE 이어야 합니다.');
	}

	node.insertAdjacentHTML('beforeend', text);
}


function insertFirst(node, text) {
	if (typeof node === 'string') node = getNode(node);
	
	if (node.nodeType !== document.ELEMENT_NODE) {
		throw new Error('inserFirst 함수의 첫번째 인수는 ELEMENT NODE 이어야 합니다.');
	}

	node.insertAdjacentHTML('afterbegin', text);
}


function insertBefore(node, text) {
	if (typeof node === 'string') node = getNode(node);
	
	if (node.nodeType !== document.ELEMENT_NODE) {
		throw new Error('inserBefore 함수의 첫번째 인수는 ELEMENT NODE 이어야 합니다.');
	}

	node.insertAdjacentHTML('beforebegin', text);
}


function insertAfter(node, text) {
	if (typeof node === 'string') node = getNode(node);
	
	if (node.nodeType !== document.ELEMENT_NODE) {
		throw new Error('inserAfter 함수의 첫번째 인수는 ELEMENT NODE 이어야 합니다.');
	}

	node.insertAdjacentHTML('afterend', text);
}




