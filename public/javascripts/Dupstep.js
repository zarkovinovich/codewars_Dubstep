function song_decoder(song){
  var originalArray= song.split('WUB')
  if(originalArray[0] === ''){originalArray.shift()}
  if(originalArray[originalArray.length-1] === ''){originalArray.pop()}
  var twoSpace = originalArray.join(' ')
  var good= twoSpace.split('  ').join('')
return good

}
console.log(song_decoder("WUBAWUBBWUBCWUB"))
