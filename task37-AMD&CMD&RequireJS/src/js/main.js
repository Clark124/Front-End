/**
 * Created by Administrator on 2017/3/31.
 */
requirejs.config({
    baseUrl:"./src/js",
    paths:{
        'jquery':'lib/bower_components/jquery/jquery-3.1.1'
    }
});
requirejs(['app/index']);