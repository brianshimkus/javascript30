const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello, I am a %s string!', '10');

    // Styled
    console.log('%c I am some great text', 'font-size: 50px;');

    // warning!
    console.warn("Oh no");

    // Error :|
    console.error("Oh no");

    // Info
    console.info('People eat food');

    // Testing
    console.assert(1 === 2);

    // clearing
    // console.clear("hello");

    // Viewing DOM Elements
    console.dir('p');

    // Grouping together
    cats.forEach(cat => {
      console.log(`This is ${cat.name}`);
      console.log(`${cat.name} is ${cat.age} years old`);
      console.log(`${cat.name} is ${cat.age * 6} cat years old`);
      console.groupEnd(`${cat.name}`);
    });

    // counting
    console.count('Oh');
    console.count('Oh');
    console.count('hi');
    console.count('hi');
    console.count('hi');
    console.count('bye');
    console.count('bye');

    // timing
    console.time('fetch data');