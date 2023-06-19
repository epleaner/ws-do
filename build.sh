cd client/preact-client;
yarn build;
cd ../..;

yarn install --production --frozen-lockfile;

rm -rf build/
mkdir build/

cp -a client/static/* build/;

mkdir build/preact
cp -a client/preact-client/build/* build/preact/;