# indonesian_jokes
Kumpulan Jokes berbahasa Indonesia
Project ini dibuat untuk memeriahkan hacktoberfest2021

## Cara running di local
```
git clone https://github.com/babaiyu/indonesian_jokes.git
cd indonesian_jokes
npm run install
npm run generate
npm run dev
```

## CONTRIBUTES
1. Fork repository ini
2. Clone repository yang telah ter-fork
3. Tambahkan file username.json di src/data lalu ikuti structure json seperti di bawah:
```
{
  "data": [
    {
      "jokes": "Sejak kapan Rengoku hidup di season 2?"
    }
  ],
  "author": "babaiyu"
}
```
4. Setelah point 3, jalankan `npm run generate`
5. Jalankan `npm run dev` untuk melihat hasil dari jokes yang telah ditambahkan
6. Commit perubahan yang ada, push ke origin dan lakukan `pull-request`

_#happy_hacktoberfest_
