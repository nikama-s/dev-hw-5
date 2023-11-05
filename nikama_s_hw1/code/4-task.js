let my_number = 14;
function is_prime(num) {
    let prim;
    if (num > 2) {
      for (let i = 2; i < num; i++){
          if (num % i === 0) {
              prim = false;
              break;
          }
          else{
              prim = true;
          }
      }
    }
    else if (num === 2) {
        prim = true;
    }
    else {
      prim = false;
    }
    console.log(prim);
}
is_prime(my_number);