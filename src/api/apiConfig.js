const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd9dbe929e3247e7a160366669d7acf3c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;