//`webtorrent-hybrid` for node only, use `webtorrent` else 
import WebTorrent from 'webtorrent-hybrid'

const client = new WebTorrent()

const url = "61c145e4ca366d5f49a90e63b2d98371959af629"

client.add(url,{ path: "downloads" },function (torrent) {
    console.log('Client is downloading:', torrent.infoHash)
    torrent.on('done', function () {
        console.log('torrent download finished')
      })
})
