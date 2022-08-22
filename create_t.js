//`webtorrent-hybrid` for node only, use `webtorrent` else 
import WebTorrent from 'webtorrent-hybrid'

const client = new WebTorrent()

client.seed(`ct/wasd.apk`, function (torrent) {
    console.log('Client is seeding ' + torrent.infoHash
    )
})
