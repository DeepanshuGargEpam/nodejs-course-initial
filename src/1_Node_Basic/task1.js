function writeFunc(str){
    process.stdout.write('Output=>>>' +" "+str + '\n\n');
}
process.stdin.on('data', function(data) { 
    data.toString().split('');
    data.reverse().join('');
    writeFunc(data) 
})