 function salaryCalculate(){

      let salary = parseFloat(document.querySelector('#salary').value)

      let totelSalary = 0;

      if(salary < 300000)
      {
        let output = document.querySelector('#output');
        output.innerHTML ="not want to pay tax";

        return false;
      }

      else if(salary >= 300000 && salary < 750000)
      {
        totelSalary = salary * 0.10;
        let output = document.querySelector('#output');
        output.innerHTML ="not want to pay tax = " + totelSalary;

        return false;
      }

      else if(salary >= 750000)
      {
        totelSalary = salary * 0.20;
        let output = document.querySelector('#output');
        output.innerHTML ="not want to pay tax = " + totelSalary;

        return false;
      }
      
    }

