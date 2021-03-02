const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const sections = new Array();

var result = 0;

readline.question('How many sections do you want to add? => ', res => {

    if(isNaN(parseInt(res))){

        console.log('Incorrect! Please, type a number...')

    }
    else{

        addSections(0, res);

    }

})

function addSections(value, limit){

        if(value < limit){

            readline.question(`Add height to section ${value} => `, res => {

                if(isNaN(parseInt(res))){
    
                    console.log('Incorrect! Please, type a number...')
    
                }
                else{
    
                    sections.push({index: sections.length, height: res})

                    addSections(value + 1, limit);
    
                }
    
            })

        }
        else{

            for(var i = 0; i < sections.length; i++){

                findLimits(sections[i].index)
            
            }

            console.log(`Algorithm result is: ${result}...`)
            readline.close()

        }

}

function findLimits(i){

    var arrayNext = sections.filter(section => section.index > i)
    var arrayBack = sections.filter(section => section.index < i)
    arrayBack.reverse();

    var biggest_num_next = arrayNext.length != 0 ? Math.max( ...Array.from(arrayNext.map(o => { return o.height })) ) : 0;
    var biggest_num_back = arrayBack.length != 0 ? Math.max( ...Array.from(arrayBack.map(o => { return o.height })) ) : 0;

    if(sections[i].height < biggest_num_back && sections[i].height < biggest_num_next){

        var lowest_num_of_biggest_nums = biggest_num_back < biggest_num_next ? biggest_num_back : biggest_num_next;
        result += lowest_num_of_biggest_nums - sections[i].height;

    }
    else{

        result += 0

    }

}