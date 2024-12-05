'use client';

import { useState } from 'react';


// Hàm hỗ trợ Galois Field Multiplication
function gfMul(a, b, p) {
  let r = 0;
  for (let i = 0; i < 8; i++) {
    if (b & 0x01) {
      r ^= a;
    }
    const highBit = a & 0x80;
    a <<= 1;
    if (highBit) a ^= p;
    b >>= 1;
  }
  return r >>> 0;
}
const ROUND_SUBKEYS = 20; // Adjust this based on your configuration
const ROUNDS = 16;
const SK_STEP = 0x02020202;
const SK_BUMP = 0x01010101;
const SK_ROTL = 9;


// Các hằng số cho thuật toán Twofish
const primitivePoly = 0x1B;
/* Kiểm tra hàm
Bạn có thể kiểm tra hàm gfMul với các giá trị nhỏ để đảm bảo rằng nó hoạt động đúng: */
console.log(gfMul(0x57, 0x83, primitivePoly)); // Kết quả sẽ là một giá trị trong trường GF(2^8)



const rs = [
  [0x01, 0xA4, 0x55, 0x87, 0x5A, 0x58, 0xDB, 0x9E],
  [0xA4, 0x56, 0x82, 0xF3, 0x1E, 0xC6, 0x68, 0xE5],
  [0x02, 0xA1, 0xFC, 0xC1, 0x47, 0xAE, 0x3D, 0x19],
  [0xA4, 0x55, 0x87, 0x5A, 0x58, 0xDB, 0x9E, 0x03]
];

// Định nghĩa đầy đủ S-box q0 theo chuẩn Twofish
const q0 = [
  0xA9, 0x67, 0xB3, 0xE8, 0x04, 0xFD, 0xA3, 0x76, 0x9A, 0x92, 0x80, 0x78, 0xE4, 0xDD, 0xD1, 0x38,
  0x0D, 0xC6, 0x35, 0x98, 0x18, 0xF7, 0xEC, 0x6C, 0x43, 0x75, 0x37, 0x26, 0xFA, 0x13, 0x94, 0x48,
  0xF2, 0xD0, 0x8B, 0x30, 0x84, 0x54, 0xDF, 0x23, 0x19, 0x5B, 0x3D, 0x59, 0xF3, 0xAE, 0xA2, 0x82,
  0x63, 0x01, 0x83, 0x2E, 0xD9, 0x51, 0x9B, 0x7C, 0xA6, 0xEB, 0xA5, 0xBE, 0x16, 0x0C, 0xE3, 0x61,
  0xC0, 0x8C, 0x3A, 0xF5, 0x73, 0x2C, 0x25, 0x0B, 0xBB, 0x4E, 0x89, 0x6B, 0x53, 0x6A, 0xB4, 0xF1,
  0xE1, 0xE6, 0xBD, 0x45, 0xE2, 0xF4, 0xB6, 0x66, 0xCC, 0x95, 0x03, 0x56, 0xD4, 0x1C, 0x1E, 0xD7,
  0xFB, 0xC3, 0x8E, 0xB5, 0xE9, 0xCF, 0xBF, 0xBA, 0xEA, 0x77, 0x39, 0xAF, 0x33, 0xC9, 0x62, 0x71,
  0x81, 0x79, 0x09, 0xAD, 0x24, 0xCD, 0xF9, 0xD8, 0xE5, 0xC5, 0xB9, 0x4D, 0x44, 0x08, 0x86, 0xE7,
  0xA1, 0x1D, 0xAA, 0xED, 0x06, 0x70, 0xB2, 0xD2, 0x41, 0x7B, 0xA0, 0x11, 0x31, 0xC2, 0x27, 0x90,
  0x20, 0xF6, 0x60, 0xFF, 0x96, 0x5C, 0xB1, 0xAB, 0x9E, 0x9C, 0x52, 0x1B, 0x5F, 0x93, 0x0A, 0xEF,
  0x91, 0x85, 0x49, 0xEE, 0x2D, 0x4F, 0x8F, 0x3B, 0x47, 0x87, 0x6D, 0x46, 0xD6, 0x3E, 0x69, 0x64,
  0x2A, 0xCE, 0xCB, 0x2F, 0xFC, 0x97, 0x05, 0x7A, 0xAC, 0x7F, 0xD5, 0x1A, 0x4B, 0x0E, 0xA7, 0x5A,
  0x28, 0x14, 0x3F, 0x29, 0x88, 0x3C, 0x4C, 0x02, 0xB8, 0xDA, 0xB0, 0x17, 0x55, 0x1F, 0x8A, 0x7D,
  0x57, 0xC7, 0x8D, 0x74, 0xB7, 0xC4, 0x9F, 0x72, 0x7E, 0x15, 0x22, 0x12, 0x58, 0x07, 0x99, 0x34,
  0x6E, 0x50, 0xDE, 0x68, 0x65, 0xBC, 0xDB, 0xF8, 0xC8, 0xA8, 0x2B, 0x40, 0xDC, 0xFE, 0x32, 0xA4,
  0xCA, 0x10, 0x21, 0xF0, 0xD3, 0x5D, 0x0F, 0x00, 0x6F, 0x9D, 0x36, 0x42, 0x4A, 0x5E, 0xC1, 0xE0
];

// Định nghĩa đầy đủ S-box q1 theo chuẩn Twofish
const q1 = [
  0x75, 0xF3, 0xC6, 0xF4, 0xDB, 0x7B, 0xFB, 0xC8, 0x4A, 0xD3, 0xE6, 0x6B, 0x45, 0x7D, 0xE8, 0x4B,
  0xD6, 0x32, 0xD8, 0xFD, 0x37, 0x71, 0xF1, 0xE1, 0x30, 0x0F, 0xF8, 0x1B, 0x87, 0xFA, 0x06, 0x3F,
  0x5E, 0xBA, 0xAE, 0x5B, 0x8A, 0x00, 0xBC, 0x9D, 0x6D, 0xC1, 0xB1, 0x0E, 0x80, 0x5D, 0xD2, 0xD5,
  0xA0, 0x84, 0x07, 0x14, 0xB5, 0x90, 0x2C, 0xA3, 0xB2, 0x73, 0x4C, 0x54, 0x92, 0x74, 0x36, 0x51,
  0x38, 0xB0, 0xBD, 0x5A, 0xFC, 0x60, 0x62, 0x96, 0x6C, 0x42, 0xF7, 0x10, 0x7C, 0x28, 0x27, 0x8C,
  0x13, 0x95, 0x9C, 0xC7, 0x24, 0x46, 0x3B, 0x70, 0xCA, 0xE3, 0x85, 0xCB, 0x11, 0xD0, 0x93, 0xB8,
  0xA6, 0x83, 0x20, 0xFF, 0x9F, 0x77, 0xC3, 0xCC, 0x03, 0x6F, 0x08, 0xBF, 0x40, 0xE7, 0x2B, 0xE2,
  0x79, 0x0C, 0xAA, 0x82, 0x41, 0x3A, 0xEA, 0xB9, 0xE4, 0x9A, 0xA4, 0x97, 0x7E, 0xDA, 0x7A, 0x17,
  0x66, 0x94, 0xA1, 0x1D, 0x3D, 0xF0, 0xDE, 0xB3, 0x0B, 0x72, 0xA7, 0x1C, 0xEF, 0xD1, 0x53, 0x3E,
  0x8F, 0x33, 0x26, 0x5F, 0xEC, 0x76, 0x2A, 0x49, 0x81, 0x88, 0xEE, 0x21, 0xC4, 0x1A, 0xEB, 0xD9,
  0xC5, 0x39, 0x99, 0xCD, 0xAD, 0x31, 0x8B, 0x01, 0x18, 0x23, 0xDD, 0x1F, 0x4E, 0x2D, 0xF9, 0x48,
  0x4F, 0xF2, 0x65, 0x8E, 0x78, 0x5C, 0x58, 0x19, 0x8D, 0xE5, 0x98, 0x57, 0x67, 0x7F, 0x05, 0x64,
  0xAF, 0x63, 0xB6, 0xFE, 0xF5, 0xB7, 0x3C, 0xA5, 0xCE, 0xE9, 0x68, 0x44, 0xE0, 0x4D, 0x43, 0x69,
  0x29, 0x2E, 0xAC, 0x15, 0x59, 0xA8, 0x0A, 0x9E, 0x6E, 0x47, 0xDF, 0x34, 0x35, 0x6A, 0xCF, 0xDC,
  0x22, 0xC9, 0xC0, 0x9B, 0x89, 0xD4, 0xED, 0xAB, 0x12, 0xA2, 0x0D, 0x52, 0xBB, 0x02, 0x2F, 0xA9,
  0xD7, 0x61, 0x1E, 0xB4, 0x50, 0x04, 0xF6, 0xC2, 0x16, 0x25, 0x86, 0x56, 0x55, 0x09, 0xBE, 0x91
];
const P = [q0, q1];
// Mảng MDS
const MDS = (() => {
  const mxX = (x) => x ^ (x >> 2) ^ (x >> 1);
  const mxY = (x) => x ^ (x >> 1) ^ (x >> 2);
  const localMDS = [[], [], [], []];
  for (let i = 0; i < 256; i++) {
      localMDS[0][i] = i ^ mxX(i);
      localMDS[1][i] = i ^ mxY(i);
      localMDS[2][i] = mxX(i);
      localMDS[3][i] = mxY(i);
  }
  return localMDS;
})();

// Các hàm byte
const b0 = (x) => x & 0xFF;
const b1 = (x) => (x >>> 8) & 0xFF;
const b2 = (x) => (x >>> 16) & 0xFF;
const b3 = (x) => (x >>> 24) & 0xFF;
// Hàm rsMDSEncode
const rsMDSEncode = (k0, k1) => {
  for (let i = 0; i < 4; i++) {
      k1 = rsRem(k1);
  }
  k1 ^= k0;
  for (let i = 0; i < 4; i++) {
      k1 = rsRem(k1);
  }
  return k1;
};
// Kiểm tra mảng
const isAnArray = (value) => Array.isArray(value) || value instanceof Uint8Array;

// Hàm rsRem
const rsRem = (x) => {
    const b = (x >>> 24) & 0xFF;
    const g2 = (b << 1) ^ ((b & 0x80) ? 0x14D : 0);
    const g3 = (b >>> 1) ^ ((b & 0x01) ? 0x14D >>> 1 : 0) ^ g2;
    return (x << 8) ^ (g3 << 24) ^ (g2 << 16) ^ (g3 << 8) ^ b;
};

// Hàm f32
const f32 = (k64Cnt, x, k32) => {
  let lB0 = b0(x), lB1 = b1(x), lB2 = b2(x), lB3 = b3(x);
  const k0 = k32[0] || 0, k1 = k32[1] || 0, k2 = k32[2] || 0, k3 = k32[3] || 0;
  let result = 0;

  switch (k64Cnt & 3) {
      case 1:
          result = MDS[0][P[0][lB0] ^ b0(k0)] ^
                   MDS[1][P[1][lB1] ^ b1(k0)] ^
                   MDS[2][P[0][lB2] ^ b2(k0)] ^
                   MDS[3][P[1][lB3] ^ b3(k0)];
          break;
      case 0:
          lB0 = P[0][lB0] ^ b0(k3);
          lB1 = P[1][lB1] ^ b1(k3);
          lB2 = P[0][lB2] ^ b2(k3);
          lB3 = P[1][lB3] ^ b3(k3);
      case 3:
          lB0 = P[0][lB0] ^ b0(k2);
          lB1 = P[1][lB1] ^ b1(k2);
          lB2 = P[0][lB2] ^ b2(k2);
          lB3 = P[1][lB3] ^ b3(k2);
      case 2:
          result = MDS[0][P[0][lB0] ^ b0(k1)] ^
                   MDS[1][P[1][lB1] ^ b1(k1)] ^
                   MDS[2][P[0][lB2] ^ b2(k1)] ^
                   MDS[3][P[1][lB3] ^ b3(k1)];
          break;
  }
  return result;
};


// Hàm hỗ trợ xoay trái và phải 32-bit
function rotateLeft32(value, shift) {
  return ((value << shift) | (value >>> (32 - shift))) >>> 0;
}

function rotateRight32(value, shift) {
  return ((value >>> shift) | (value << (32 - shift))) >>> 0;
}


// Hàm S-box transform
function sBoxTransform(val, context) {
  return (
    context.s1[val & 0xff] ^
    context.s2[(val >> 8) & 0xff] ^
    context.s3[(val >> 16) & 0xff] ^
    context.s4[(val >> 24) & 0xff]
  );
}
// Key Expansion
const keyExpansion = (aKey) => {
  if (!isAnArray(aKey)) {
      throw new Error("Key must be an array");
  }

  let keyLength = aKey.length;
  const k64Cnt = Math.ceil(keyLength / 8);
  const subKeyCnt = ROUND_SUBKEYS + 2 * ROUNDS;
  const k32e = new Array(4).fill(0);
  const k32o = new Array(4).fill(0);
  const sBoxKey = new Array(4).fill(0);

  // Pad or truncate key
  if (keyLength < 8 || (keyLength > 8 && keyLength < 16) ||
      (keyLength > 16 && keyLength < 24) || keyLength > 32) {
      aKey = Array.from(aKey).concat(new Array(32 - keyLength).fill(0)).slice(0, 32);
  }

  let offset = 0;
  for (let i = 0; i < 4; i++) {
      if (offset >= keyLength) break;
      k32e[i] = (aKey[offset++] & 0xFF) |
                ((aKey[offset++] & 0xFF) << 8) |
                ((aKey[offset++] & 0xFF) << 16) |
                ((aKey[offset++] & 0xFF) << 24);
      k32o[i] = (aKey[offset++] & 0xFF) |
                ((aKey[offset++] & 0xFF) << 8) |
                ((aKey[offset++] & 0xFF) << 16) |
                ((aKey[offset++] & 0xFF) << 24);
      sBoxKey[3 - i] = rsMDSEncode(k32e[i], k32o[i]);
  }

  const subKeys = [];
  for (let i = 0, q = 0; i < subKeyCnt / 2; i++, q += SK_STEP) {
      const A = f32(k64Cnt, q, k32e);
      let B = f32(k64Cnt, q + SK_BUMP, k32o);
      B = (B << 8) | (B >>> 24);
      subKeys[2 * i] = A + B;
      subKeys[2 * i + 1] = ((A + 2 * B) << SK_ROTL) | ((A + 2 * B) >>> (32 - SK_ROTL));
  }

  return [sBoxKey, subKeys];
};



// Các hàm hỗ trợ mã hóa và giải mã Twofish
function toBytes(uint32Array) {
  const byteArray = new Uint8Array(uint32Array.length * 4);
  for (let i = 0; i < uint32Array.length; i++) {
    byteArray[i * 4] = (uint32Array[i] & 0xff);
    byteArray[i * 4 + 1] = (uint32Array[i] >>> 8) & 0xff;
    byteArray[i * 4 + 2] = (uint32Array[i] >>> 16) & 0xff;
    byteArray[i * 4 + 3] = (uint32Array[i] >>> 24) & 0xff;
  }
  return byteArray;
}

function fromBytes(byteArray) {
  const uint32Array = new Uint32Array(byteArray.length / 4);
  for (let i = 0; i < uint32Array.length; i++) {
    uint32Array[i] =
      byteArray[i * 4] |
      (byteArray[i * 4 + 1] << 8) |
      (byteArray[i * 4 + 2] << 16) |
      (byteArray[i * 4 + 3] << 24);
  }
  return uint32Array;
}


// Hàm mã hóa một khối với ghi log chi tiết
function encryptBlock(context, input) {
  let r0 = input[0] ^ context.me[0];
  let r1 = input[1] ^ context.me[1];
  let r2 = input[2] ^ context.me[2];
  let r3 = input[3] ^ context.me[3];

  for (let i = 0; i < 16; i++) {
    const t0 = sBoxTransform(r0, context);
    const t1 = sBoxTransform(r1, context);

    const f0 = (t0 + t1 + context.mo[2 * i]) >>> 0;
    const f1 = (t0 + (2 * t1) + context.mo[2 * i + 1]) >>> 0;

    r2 = rotateRight32(r2 ^ f0, 1);
    r3 = rotateLeft32(r3 ^ f1, 1);

    [r0, r2] = [r2, r0];
    [r1, r3] = [r3, r1];
  }

  const output = new Uint32Array(4);
  output[0] = r2 ^ context.me[36];
  output[1] = r3 ^ context.me[37];
  output[2] = r0 ^ context.me[38];
  output[3] = r1 ^ context.me[39];

  return output;
}

// Hàm giải mã một khối với ghi log chi tiết
function decryptBlock(context, input) {
  let r2 = input[0] ^ context.me[36];
  let r3 = input[1] ^ context.me[37];
  let r0 = input[2] ^ context.me[38];
  let r1 = input[3] ^ context.me[39];

  for (let i = 15; i >= 0; i--) {
    // Hoán đổi lại thứ tự r0, r2 và r1, r3
    [r0, r2] = [r2, r0];
    [r1, r3] = [r3, r1];

    // Sử dụng các phép toán MDS và S-box transform theo chiều ngược lại
    const t0 = sBoxTransform(r0, context);
    const t1 = sBoxTransform(r1, context);

    const f0 = (t0 + t1 + context.mo[2 * i]) >>> 0;
    const f1 = (t0 + (2 * t1) + context.mo[2 * i + 1]) >>> 0;

    // Dịch bit ngược lại (rotate trái đối với giải mã)
    r2 = rotateLeft32(r2, 1) ^ f0;
    r3 = rotateRight32(r3, 1) ^ f1;
  }

  const output = new Uint32Array(4);
  // Khôi phục lại giá trị bằng cách XOR với các giá trị trong `me` (subkeys)
  output[0] = r0 ^ context.me[0];
  output[1] = r1 ^ context.me[1];
  output[2] = r2 ^ context.me[2];
  output[3] = r3 ^ context.me[3];

  return output;
}



// Xử lý padding
function applyPadding(bytes, blockSize = 16) {
  const padding = blockSize - (bytes.length % blockSize);
  return Uint8Array.from([...bytes, ...new Array(padding).fill(padding)]);
}
function removePadding(bytes) {
  const padding = bytes[bytes.length - 1];
  return bytes.slice(0, bytes.length - padding);
}



function twofishEncrypt(key, input) {
  const [sBoxKey, subKeys] = keyExpansion(key);

  // Tạo context với sBox và subKeys
  const context = {
    me: subKeys.slice(0, 20), // 20 giá trị đầu
    mo: subKeys.slice(20), // Phần còn lại
    s1: MDS[0],
    s2: MDS[1],
    s3: MDS[2],
    s4: MDS[3],
  };

  const inputBlock = fromBytes(input);
  const encryptedBlock = encryptBlock(context, inputBlock);
  return toBytes(encryptedBlock);
}

// Hàm Twofish Decrypt
function twofishDecrypt(key, input) {
  const [sBoxKey, subKeys] = keyExpansion(key);

  // Tạo context với sBox và subKeys
  const context = {
    me: subKeys.slice(0, 20), // 20 giá trị đầu
    mo: subKeys.slice(20), // Phần còn lại
    s1: MDS[0],
    s2: MDS[1],
    s3: MDS[2],
    s4: MDS[3],
  };

  const inputBlock = fromBytes(input);
  const decryptedBlock = decryptBlock(context, inputBlock);
  return toBytes(decryptedBlock);
}

const testKey = new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89, 0xAB, 0xCD, 0xEF, 0xFE, 0xDC, 0xBA, 0x98, 0x76, 0x54, 0x32, 0x10]);
const testData = new Uint8Array([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F]);

const encrypted = twofishEncrypt(testKey, testData);



// Giao diện ứng dụng
export default function Home() {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [actionType, setActionType] = useState('Encrypt');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const keyBytes = new TextEncoder().encode(key).slice(0, 16); // Limit to 16 bytes
    const messageBytes = new TextEncoder().encode(message);

    let output = '';
    try {
      if (actionType === 'Encrypt') {
        const paddedMessage = applyPadding(messageBytes); // Add padding
        const encrypted = twofishEncrypt(keyBytes, paddedMessage);
        output = Array.from(encrypted)
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('');
      } else if (actionType === 'Decrypt') {
        const encryptedBytes = Uint8Array.from(
          message.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
        );
        const decrypted = twofishDecrypt(keyBytes, encryptedBytes);
        const unpaddedDecrypted = decrypted; // Remove padding
        output = new TextDecoder().decode(unpaddedDecrypted);
      }
    } catch (error) {
      output = `Error: ${error.message}`;
    }

    setResult(output);
  };

  return (

      <div className="flex items-center justify-center py-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">Twofish Encryption/Decryption</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Message:</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message (max 16 bytes)"
                required
                className="w-full px-4 py-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-700">Key:</label>
              <input
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Enter a 16-byte key"
                required
                className="w-full px-4 py-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-700">Select Mode:</label>
              <select
                value={actionType}
                onChange={(e) => setActionType(e.target.value)}
                className="w-full px-4 py-2 border rounded-md text-gray-700"
              >
                <option value="Encrypt">Encrypt</option>
                <option value="Decrypt">Decrypt</option>
              </select>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Execute
            </button>
          </form>

          {result && (
            <div className={`mt-5 p-4 rounded-lg ${actionType === 'Encrypt' ? 'bg-green-100' : 'bg-yellow-100'}`}>
              <h3 className="text-xl font-bold text-gray-700">{actionType} Result:</h3>
              <p className="break-words text-gray-700">{result}</p>
            </div>
          )}
        </div>
      </div>

  );
}