// 宣言はvar, let, const
// 型は動的
/*
{
    var aaa = 1;
    let bbb = "bbb";
    const ccc = true;
    
    console.info(aaa);
    console.info(bbb);
    console.info(ccc);    
}
*/

/*
・primitive(文字列や数字)
// 数値 Number
// 文字列 String
// 論理値 Boolean
// null
// undefined
// シンボル Symbol

・Object
配列 Array
日時 Date
*/

// varはグローバル変数
// es5まで一般的に使われていたが、ほぼ禁止
/*
{
    var flg = true;

    if(flg){
        var aaa = 5;
    }
    
    console.info(aaa);    
}
*/

// es6(es2015)から追加
/*
{
    let flg = true;

    if(flg){
        let aaa = 5;
    }
    
    console.info(aaa);    
}
*/

// 値が型を持っている。
/*
{
    let xxx;
    console.info(typeof xxx);

    xxx = 5;
    console.info(typeof xxx);

    xxx = "xxx";
    console.info(typeof xxx);

    xxx = true;
    console.info(typeof xxx);

    xxx = null;
    console.info(typeof xxx);

    xxx = undefined;
    console.info(typeof xxx);

    xxx = [];
    console.info(typeof xxx);
}
*/

// 日本語の変数OK
/*
{
    let 日本語は = "OK";
    console.info(日本語は);
}
*/

// == と === の使い方
/*
{
    let hoge1 = 5;
    let hoge2 = 5;
    if(hoge1 == hoge2){
        console.info("同じ");
    }else{
        console.info("違う");
    }

    if(hoge1 === hoge2){
        console.info("同じ");
    }else{
        console.info("違う");
    }

}
*/

/*
{
    let hoge1 = 5;
    let hoge2 = "5";
    if(hoge1 == hoge2){
        console.info("同じ");
    }else{
        console.info("違う");
    }

    if(hoge1 === hoge2){
        console.info("同じ");
    }else{
        console.info("違う");
    }

}
*/

// 配列
/*
{
    let hoge1 = [1,2,3];
    let hoge2 = hoge1;

    if(hoge1 === hoge2){
        console.info("同じ");
    }else{
        console.info("違う");
    }
}

{
    let hoge1 = [1,2,3];
    let hoge2 = [1,2,3];

    if(hoge1 === hoge2){
        console.info("同じ");
    }else{
        console.info("違う");
    }
}
*/

