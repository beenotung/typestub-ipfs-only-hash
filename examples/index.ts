import { createReadStream } from 'fs'
import { readFileSync } from 'fs'
import { of } from 'typestub-ipfs-only-hash'
import * as Hash from 'typestub-ipfs-only-hash'
import { execSync } from 'child_process'

;(async () => {
  console.log('ipfs add -n:', execSync('ipfs add -n package.json').toString())

  console.log('from string:', await of(readFileSync('package.json').toString()))
  console.log('from buffer:', await Hash.of(readFileSync('package.json')))
  console.log('from stream:', await of(createReadStream('package.json')))
})()
