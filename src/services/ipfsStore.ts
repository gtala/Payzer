import { Web3Storage } from "web3.storage";

export const storeIpfsData = async (data: Object): Promise<string> => {
  const client = makeStorageClient();
  const files = makeFileObjects(data);
  const cid = await client.put(files);
  console.log("Content added with CID:", cid);
  return cid;
};

const makeStorageClient = (): Web3Storage => {
  const token = process.env.REACT_APP_WEB3_STORAGE || "";
  return new Web3Storage({ token: token });
};

export const listUploads = async () => {
  const client = makeStorageClient();
  for await (const upload of client.list()) {
    console.log(
      `${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`
    );
  }
};

export const makeFileObjects = (obj: Object) => {
  const buffer = Buffer.from(JSON.stringify(obj));
  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([buffer], "users.json"),
  ];
  return files;
};