let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  for (let i =0; i <  Object.keys(menu).length; i++){
    let k=Object.keys(menu)[i];
    console.log(menu[k]);
    if (typeof menu[k]=="number"){
        console.log(2*menu[k]);
  }
  }

  let user={
  };
  user.name="John";
  user.surname="smith";
  user.name="plate"
  delete user.name;
  console.log(user);

  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
const sum=0;
  for (let i =0; i < Object.keys(salaries).length; i++){
    let k=Object.keys(salaries)[i];
    console.log(salaries[k]);
    sum +=salaries[k];
  }
  console.log(sum);
