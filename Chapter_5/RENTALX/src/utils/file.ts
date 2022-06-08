import fs from "fs";

export const deleteFile = async(filename: string) => {

    try {
        //verifica se o arquivo existe
        await fs.promises.stat(filename);
    }catch (err) {
        return;
    }

    //remove o arquivo de fato
    await fs.promises.unlink(filename);
}