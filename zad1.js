process.stdin.setEncoding('utf8');
process.stdin.on('readable', function(){
var input = process.stdin.read();
if(input !== null){
    var instruction = input.toString().trim();
    if(instruction === 'exit') {
       process.abort(); 
    } else {
    console.log('Wpisałeś tekst:  '+input.toString());
    }
}
})