var endFlipFoxkeh //endFlipFoxkehという情報の定義づけ
= function(){
	var foxkeh //foxkehとはどれかを定義させる
		= document.querySelector("#slidein-foxkeh img");//document内にある"#slidein-foxkeh img"という情報を使用
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);//animationendで動作を終了させる

	foxkeh.setAttribute("class", "");//上段で説明されたfoxkehをwoclassで表す
};

var endSlideinFoxkehAndStartFlipFoxkeh //endSlideinFoxkehAndStartFlipFoxkehという動作の定義付け
= function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");//document内にある"#slidein-foxkeh img"という情報を使用

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);//"animationend", endSlideinFoxkehAndStartFlipFoxkehの動作を妨げる
	foxkeh.addEventListener("animationend", endFlipFoxkeh);//"animationend", endFlipFoxkehの動作を開始させる。上段とこの段の２段によって、動作を繰り返し行う鵜ことを可能にしている

	foxkeh.setAttribute("class", "flip");//"class"を"flip",つまり回転させる
};

var startSlideinFoxkeh//startSlideinFoxkehという動作の定義付け
 = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");//document内にある"#slidein-foxkeh img"という情報を使用
	foxkeh.setAttribute("class", "slidein");siyou//"class"を"slidein",つまり右からすべりこむように登場させる

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);//"animationend", endFlipFoxkehの動作を開始させる
};

var slideinFoxkehButton//slideinFoxkehButtonという情報の定義付け
 = document.querySelector("#slidein-foxkeh button");//document内にある"#slidein-foxkeh button"という情報を使用
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);//上段で定義したstartSlideinFoxkehBUttonのボタンをクリックされたとき、startSlideinFoxkehの動作を開始する。
