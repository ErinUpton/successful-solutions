// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// if.. else statements 
function DNAStrand(dna){
  
  dna = dna.split('');
  
  let newStrand = [];
  
  dna.map(strand => {
    if(strand === 'A') {
        newStrand.push('T')
    } else if (strand === 'T') {
        newStrand.push('A')
    } else if (strand === 'G') {
        newStrand.push('C')
    } else if (strand === 'C') {
        newStrand.push('G')
    }
  }
    )


return newStrand.join('')
}



// //using obj keys 
function dnaStrand(dna) {
  let newDNA = '';
  let dnaKeys = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  for(let i = 0; i < dna.length; i++) {
    let character = dna[i];
    newDNA += dnaKeys[character]
  }

  return newDNA
}



// using object Keys && map()
function DNAStrand(dna) {
  dna = dna.split('')
  const keys = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };

  return dna.map(dnaChar => keys[dnaChar]).join('');
}

console.log(DNAStrand('TAGC'))