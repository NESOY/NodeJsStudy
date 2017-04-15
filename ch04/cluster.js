/**
 * Created by nesoy on 2017. 4. 15..
 */
var cluster = require('cluster');
if(cluster.isMaster){
    cluster.fork();
}