export default function request(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${url} Berhasil`);
        }, 1500);
    });
}
