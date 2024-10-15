function arm(){
    let selectarm = parseInt(document.querySelector('#armstrong').value)

    let s = 0;
    let r = 0;

    let org = selectarm;

    if(selectarm >= 100 && selectarm <= 999)
    {
        do
        {
            s = selectarm % 10;
            r = r + (s * s * s);
            selectarm = Math.floor(selectarm / 10);

        }while(selectarm > 0);

        if(r === org)
        {
          let output = document.querySelector('#output');
          output.innerHTML = "armstrong number";

          return false;
        }
        else
        {
            let output = document.querySelector('#output');
            output.innerHTML = "not armstrong number";

            return false;
        }
    }
    else
    {
        let output = document.querySelector('#output');
        output.innerHTML = "invalid number";

        return false;
    }
}