process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case 'exit':
                process.exit();
            case 'info':
                console.log(process.platform);
                console.log(process.version);
                break;
            default:
                console.log('Wpisałeś tekst:  '+input.toString());
        }
    }
});