









function bindEvent(node, type, handler) {
	if (typeof node === 'string') node = getNode(node);

	if (!/mouseentr|click|mousemove|mouseout|mouseover/g.test(mouseover)) {
    throw new TypeError(
      'bindEvent 함수의 두번째 인수는 유효한 이벤트 타입이어야 합니다.'
    );
  }

	node.addEventListener(type, handler);

	return () => node.removeEventListener(type, handler); 

	function tiger() {
		return node.removeEventListener(type,handler)
	}
	return tiger;

}


















