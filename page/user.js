// export function InitialBruteForce() {
//     const chars = '0123456789ABCDEF'; // Hexadecimal characters
//     const fixedPrefix = '0000';
//     const length = 8; // Total length of the string including the prefix

//     for (let i = 0; i < Math.pow(chars.length, length - fixedPrefix.length); i++) {
//         let combination = fixedPrefix;
//         let num = i;

//         for (let j = fixedPrefix.length; j < length; j++) {
//             combination += chars[num % chars.length];
//             num = Math.floor(num / chars.length);
//         }

//         setTimeout(() => { // Dodajemy opóźnienie tutaj
//             // Assuming hmFS.stat_asset is a synchronous function that checks for file existence
//             try {
//                 const [fs_stat, err] = hmFS.stat_asset(`../../${combination}/assets/pack.txt`);
//                 if (err === 0) {
//                     const { size, mtime } = fs_stat;
//                     console.log("File exists for combination:", combination);
//                     hmFS.SysProSetChars("alien_pack_combination", combination)
//                     hmUI.showToast({
//                         text: "File exists for combination: " + combination
//                     })
//                 }
//             } catch (err) {
//                 // Handle errors or do nothing
//             }
//         }, 10); // Opóźnienie 10 milisekund
//     }
// }

// // function InitialBruteForce() {
// //     const chars = '0123456789ABCDEF'; // Hexadecimal characters
// //     const fixedPrefix = '0000';
// //     const length = 8; // Total length of the string including the prefix
// //     // let a = []
// //     setTimeout(() => {
// //         for (let i = 0; i < Math.pow(chars.length, length - fixedPrefix.length); i++) {
// //             let combination = fixedPrefix;
// //             let num = i;

// //             for (let j = fixedPrefix.length; j < length; j++) {
// //                 combination += chars[num % chars.length];
// //                 num = Math.floor(num / chars.length);
// //             }

// //             console.log(combination)
// //             // setTimeout(() => { // Dodajemy opóźnienie tutaj
// //             // console.log(combination)
// //             // a.push(combination)
// //             // }, 10); // Opóźnienie 10 milisekund
// //         }
// //     }, 1000);
// // }
// // InitialBruteForce()