# typestub-ipfs-only-hash
[![npm Package Version](https://img.shields.io/npm/v/typestub-ipfs-only-hash.svg?maxAge=2592000)](https://www.npmjs.com/package/typestub-ipfs-only-hash)

Typescript declaration and wrapper for [ipfs-only-hash](https://github.com/alanshaw/ipfs-only-hash)

## Typescript Signature
```typescript
export function of (
  content: string | Buffer | Stream,
): Promise<string>
```

## Usage Example

Using namespace import
```typescript
import * as Hash from 'typestub-ipfs-only-hash'

;(async () => {
  const data = 'hello world!'
  const hash = await Hash.of(data)
  console.log(hash) // QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j
})()
```

Or using named import:
```typescript
import { of } from 'typestub-ipfs-only-hash'

;(async () => {
  const data = 'hello world!'
  const hash = await of(data)
  console.log(hash) // QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j
})()
```

Details refer to [examples](./examples/index.ts)