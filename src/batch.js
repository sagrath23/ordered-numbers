import { fs, read } from 'fs';
import { readFileAsync, checkLastOrderedNumberByPattern } from './lib/util';

const launch = async() => {
        // reading file
        console.log(`reading data from ${process.argv[2]}`);

        const fileContent = await readFileAsync(process.argv[2]);
        console.log('readed!!!');
        console.log(fileContent, 'content');    
};

launch();