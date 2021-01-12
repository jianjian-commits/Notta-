export const timedat = (res) => {   //res 为传入的时间戳   例：1509091800000

    var time = new Date(res);

    var h = time.getHours();
    if(h < 10){
        h = "0" + h
    }

    var f = time.getMilliseconds();
    if(f < 10){
        f = "0" + f
    }

    var s = time.getSeconds();
    if(s < 10){
        s = "0" + s
    }

    return h + ':' + f + ':' + s;    //返回格式  "2017-10-27" 字符串
};