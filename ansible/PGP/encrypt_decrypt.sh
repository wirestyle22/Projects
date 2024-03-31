#!/usr/bin/env bash
source "/home/datatransfer/bank/scripts/master.sh"
encryptedFolderPath="/home/datatransfer/bank/in/"
decryptedFolderPath="/home/serviceaccount/bank_files/"
archiveFolderPath="/home/datatransfer/bank/archive/in/"
for i in "$encryptedFolderPath"*.pgp
do
    gpg --batch --homedir /users/root/.gnupg --passphrase "$PASS" --list-only --list-packets --yes "$i" | grep -q "encrypted"
    if [ $? != 0 ]; then
        echo "$i is not a pgp file"
        continue
    fi
    v=${i%.*}
    encryptedFile="$v"
    fileName=${encryptedFile##*/}
    extension=${fileName##*\.}
    newFileName=${fileName%.*}
    fileWithoutTimestamp="$newFileName.$extension"
    gpg --batch --homedir /users/root/.gnupg/ --passphrase "$PASS" --yes --decrypt "$i" > "$decryptedFolderPath"/"$fileWithoutTimestamp"
    # check if it's a readable file
    ls -lr "$decryptedFolderPath"/"$fileWithoutTimestamp"
    if [ $? != 0 ]; then
        echo "$fileWithoutTimestamp is not a readable file"
        continue
    fi
    # move the gpg file to the archive
    mv "$i" "$archiveFolderPath"
done