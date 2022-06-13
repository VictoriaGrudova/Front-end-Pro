
    const number=25;
    console.log(`${number.toString(16)}`);
    console.log(`${number.toString(2)}`);

    const num = 55;
    prompt (num);
    console.log(typeof num);
    console.log(parseInt ( `${num}`) + 2);
    console.log(parseInt ( `${num}`) - 2);
    console.log(parseInt ( `${num}`) * 2);
    console.log(parseInt ( `${num}`) / 2);

    const string_one = 'Hello World';
    prompt (string_one);
    console.log(typeof string_one);
    console.log(`${string_one.length}`);

    console.log(parseFloat((0.778445 + 0.745468).toFixed(2))+2);

    const string_hw = 'the quick brown fox jumps over the lazy dogs back';
    const string_hw2 = 'brown fox jumps';

    /*console.log(string_hw2.toUpperCase())*/

    const result = string_hw.charAt(0).toUpperCase() + string_hw.slice(1);
    console.log(result);

    console.log(`${string_hw}`.indexOf(string_hw2));

    let a=1, b=2, c=3, d=3;
    console.log((a === 1) || (c < 2) || (b < 3));
    console.log((a <= 1) || (c < 2) || (b === 5));
    console.log((a <= 3) || (c <= 2) || (b === 2));

    console.log((a <= 2) && (c > 2) && (b === 2));
    console.log((b === 2) && (c < 4) && (c > 1));
    console.log((c > 1) && (c = 2) && (d > 1));

    let numb = '1';
    console.log(numb == 1);
    console.log(numb === 1);

    let text;
    console.log(text ?? 'No text');

    let user;
    console.log(user ?? 'No user');



