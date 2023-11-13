const api = "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"
const inp = document.getElementById("inp");
const imgs = document.querySelector(".imgs")

const getImgs = async () => {
    //make a request
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": " application/json",
            "Authorization": `Bearer ${api}`,
        },
        body: JSON.stringify({

            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    //parse response as json
    const data = await res.json()
    console.log(data);
    const listImages = data.data;
    console.log(listImages);
    imgs.innerHTML = ''
    listImages.map(photo => {
        const container = document.createElement("div");
        imgs.append(container);
        const img = document.createElement("img");
        container.append(img);
        img.src = photo.url
    })

}

