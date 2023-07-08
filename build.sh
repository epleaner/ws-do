echo "installing dependencies";
yarn install --production --frozen-lockfile;

rm -rf build/
mkdir build/

# build and copy preact client
echo "building preact client";
cd client/preact-client;
yarn build;
cd ../..;
cp -a client/preact-client/build/* build;

# build and copy lit client
echo "building lit client";
cd client/lit;
yarn build;
cd ../..;
mkdir build/lit;
cp -a client/lit/build/* build/lit;

# copy all static clients into build
echo "copying static clients";
cp -a client/static/* build/;