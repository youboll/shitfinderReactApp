export default class videoStorage{
    constructor (folder) {
        this.folder = folder || "videos";
    }
    getVideos() {
        return(localStorage.getItem(this.folder))
    }
    getVideosJson() {
        return(JSON.parse(localStorage.getItem(this.folder)))
    }
    setVideo(key) {
        if (this.getVideos() == null) {
            let obj = {'codes':[key]}
            localStorage.setItem(this.folder,JSON.stringify(obj))
        } else {
            let obj = JSON.parse(this.getVideos());
            obj.codes.push(key)
            localStorage.setItem(this.folder,JSON.stringify(obj))
        }
    }
    exists(key) {
        if (this.getVideos() == null) {
            return(false)
        } else {
            let codes = JSON.parse(this.getVideos()).codes
            return(codes.includes(key))
        }
    }
    getLastItem() {
        if (this.getVideos() == null) {
            return(false)
        } else {
            return(JSON.parse(this.getVideos()).codes.reverse()[1])
        }
    }
}