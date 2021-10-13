# Cara berpartisipasi dalam repository ini
1. Fork repository ini
2. Clone repository yang telah ter-fork
3. Tambahkan file username.json lalu ikuti structure json seperti di bawah:
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
Anda bisa menambahkan lebih banyak jokes dalam key `data`. Pastikan value dari `author` adalah username github yang valid.
4. Setelah point 3, jalankan `npm run generate`
5. Jalankan `npm run dev` untuk melihat hasil dari jokes yang telah ditambahkan
6. Commit perubahan yang ada, push ke origin dan lakukan `pull-request`