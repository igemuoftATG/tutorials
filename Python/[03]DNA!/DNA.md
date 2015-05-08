# DNA

You will create a program called `sequence.py`. This program will open a text file
called `DNA.txt` and will output the corresponding RNA sequence and amino acid
sequence. To transcribe the RNA sequence, simply replace all `T`s with `U`s. To then
translate the RNA sequence to AAs, you need to create a dictionary of codons to
AAs which you will then use to convert your codons to AAs. Just like a RNA
polymerase, you will need to first find the start codon in the RNA and then
start translating at the correct reading frame. After getting the correct amino
acid sequence, put it through [protein BLAST](http://blast.ncbi.nlm.nih.gov/Blast.cgi/oShow/Blast.cgi?PROGRAM=blastp&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome) to figure out the identify of the
protein. That's right, I did not choose some random DNA sequence.
