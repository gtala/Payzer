import { Web3Storage } from "web3.storage";

export const storeIpfsData = async (data: Object): Promise<string> => {
  const token = process.env.REACT_APP_WEB3_STORAGE || "";
  const client = new Web3Storage({ token: token });
  const files = makeFileObjects(data);
  const cid = await client.put(files);
  console.log("Content added with CID:", cid);
  return cid;
};

export const makeFileObjects = (obj: Object) => {
  const buffer = Buffer.from(JSON.stringify(obj));
  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([buffer], "hello.json"),
  ];
  return files;
};