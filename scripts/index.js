const {
    establishReadConn,
    establishWriteConn,
    establishInfuraRinkebyConn
} = require("./connection");

const tokenAddress = "0xD58Ae1AaA372B442a0E6De217Ba94A75ea6f9a41";//change this with mainnet address
const airdropAddress = "0x7683Ea19937F39dB2048EC737D3fcAEa9F9bc338";//change this with mainnet address
const erc20Abi = require("../build/contracts/IERC20.json");
const airdropAbi = require("../build/contracts/Airdrop.json");
const owner = "0x84eF0571a9B311aC93A55D95646D4C26b0615460";

var BigNumber = require('bignumber.js');


var amounts = ["86442875666330500000000","86442875666330500000000","86442875666330500000000","1260625270133990000000000","1260625270133990000000000","1260625270133990000000000","691543005330644000000000","547471545886760000000000","489842962109206000000000","662728713441867000000000","244921481054603000000000","187292897277049000000000","115257167555107000000000","720357297219421000000000","590692983719925000000000","176487537818758000000000","187292897277049000000000","187292897277049000000000","201700043221438000000000","230514335110215000000000","115257167555107000000000","43221437833165300000000","3601786486097100000000","43221437833165300000000","43221437833165300000000","43221437833165300000000","43221437833165300000000","43221437833165300000000","43221437833165300000000","3601786486097100000000","3601786486097100000000","43221437833165300000000","3601786486097100000000","3601786486097100000000","43221437833165300000000","43221437833165300000000","3601786486097100000000","43221437833165300000000","43221437833165300000000","360178648609710000000","360178648609710000000","360178648609710000000","360178648609710000000","360178648609710000000","360178648609710000000","360178648609710000000","360178648609710000000","360178648609710000000","360178648609710000000","3601786486097100000000","360178648609710000000","360178648609710000000","360178648609710000000","3601786486097100000000","3601786486097100000000","3601786486097100000000","3601786486097100000000","3601786486097100000000","360178648609710000000","43221437833165300000000"];
var addresses = ["0xcab29b9eDf4ddd2232D2756f0F54D3f3fE86f73d","0x7365E525E59b5835C0da0636DDA2d22D4Ec855d5","0x4d4e07232b268Ba3209ECea032Ea0c41fEB30270","0xF8e3Ca678F53ee2b0DD8160E00AFac8916381570","0x694245C83081f99bc141fE3B42A52f22DEc5A952","0x5E07D315d4CC5D62709BAAeFaAeFF3Fe45b58109","0x1981d2eA8936eA9A78bc34fEDA789CBe501B42dA","0x2bdCb9f55C1D6b5762293482c7963e299F442758","0x02bE12fba9005BDFfC7930340F913db533B21a51","0xD7A3F06a3BE342fBce72c8e1A75d361732E5efC3","0xb3825f30f4fD19CC777bDc09E0689200C64Db32c","0x392ec69B8b921845c68F36D617304824536F0585","0x6aD126c9d53e38299536caBd33ee7B2d8454091E","0x2eF3E8bB2f1Cacd89A92E3888e48Ec2BFD89Da96","0x56aCf42Fb4aa3520B9419f8Fc8E6083385F1F866","0x21BbccCC8ab1e3Dd69274B2346e59a1394468BD0","0x8348049E1731B9D9d2efBF72E2f836EaDC41e783","0xA601A83C35e2a00a836908665D30f947F349AEA8","0xd6d616df0c4af87E11c47fAD97CE81cCdBB7eCF8","0x0aFcA301C6d0F0D374B58381a8763b2d421ad721","0x552F534E5ff3fcb95274BfbE49ec90446998d636","0xfFFEA3880634F970DFf41d1571DE25A5C88ADEA5","0x554bbbBD6735A5E26914555256F1bf722C368F36","0x7153e4A319badA1cBac7F2cd369632Ef0f4d4F1B","0x3B5d0362D6F73EBF7668ead2E2c49B8e8877010F","0x5f9e8BB40FAD42D597591BEDfE21cb160Eec2A71","0x2527A3071c94dfF114cCC207BA57b0a3B2Bf0528","0xadD02A4d13eb549920FF313162115185f52f950c","0x9a93512EE6b937A05B4300346bBc9BfD920f7DF7","0x856b114cCd16dCd606D0F5d33c094004bC3Bc059","0x02C799b2a7Df9190CDD71C8A04Ff0C2fADeE0D7D","0xE3eb13a7456F716fe65847741fec934A82538b39","0xa92C1573B20Da4cf62111ea79911841fb4BE7b20","0x3c4AF56E8a9Fc59A8FC11efe65487D75999338C2","0x88Ded47CE653D678534657c78B2F4FB5343ce3ca","0x0B3eb2C68d784D2a3bEdC4b24a1A17753e66617D","0xf5D25bB273760F347ed6367375E9C548130EaC59","0x3E5898DBcA3055d75967c9857C051E16dF9D223f","0x3f73998BeAcc65113Ba20eF7cD64638C303bd6eA","0xac8Cd492DD529A3A378CD9866e2301148343D4Db","0x9E48BBa46a34300ab461756EDbD82248e4c19D87","0xB0eEcDEEDCc35B6f88003478ffB8fC751997575D","0x68B87Ec6F90B412fd7Bc3A87D5f791B4eEF5d56F","0xC709D167C107cA9c896fa19ABac90883F96e12b3","0x9c26fEC7Af0e7f9f2BaE7B00e4Be5A962f17830D","0x8ADB673ce169D649C8cDe904A0834c4bD3daA44B","0xdcc09E83aaC999c33388aef6c6FdFd1E3C3310AF","0x82C9ac466B1fe0b8Fe0561D64139e6fA2728eB42","0xdFe03F61E47a0b3DDa1fA3D0E1E76224f9560F0e","0xBf30bdC2e901839c1C277b57d7C172215e55c15B","0x60Ee7853Acf45A243eE7B01913d39FE665DCe68B","0x73EB44B10e6754EAe6A6B0feE45523e55589867D","0xCae8F9E85a727aBfc35D227d7F0f3F79cF658d08","0x1e252f861D7f42D379e6FC5FCA3775270cc87A39","0xADa2F4b2339120fb75b64098E8Adf744871F51bc","0x9efAab9A98eE0143a9AB803e825659102e17eE9a","0x7a5677738451DC99Ff40BdDe1e143D3e6E4D8337","0x747fb2f69221C00Ec4f3D5ADdb9a0cAC2f78A480","0x2340410BF6956CEF412dceD66aA1AD3991C67f8c","0x226bE90dB26802863bf0673bbDAb902Ff340f0DC"];

var getAirdropContractWrite = () => {
    var web3Conn = establishWriteConn();

    var airdropContract = new web3Conn.eth.Contract(airdropAbi.abi, airdropAddress);
    return airdropContract;
}

var getTokenContractRead = () => {
    var web3Conn = establishInfuraRinkebyConn();//change this with mainnet connection

    var tokenContract = new web3Conn.eth.Contract(erc20Abi.abi, tokenAddress);
    return tokenContract;
}

var getUserBalance = async( userAddress ) => {
    var tokenContract = getTokenContractRead();

    var userBalance = await tokenContract.methods.balanceOf(userAddress).call();
    
    return userBalance;
}

var crossCheckBalances = async() => {
    
    for(var i = 0; i<addresses.length; i++){

        var userBalance = await getUserBalance(addresses[i]);
        userBalance = new BigNumber(userBalance);

        if(!userBalance.isEqualTo(new BigNumber(amounts[i]))){
            throw "Balances does not match!!"
        }
    }
    
}


var transferTokens = async() => {
    
    var airdropContract = getAirdropContractWrite();
    try{

        //Unlock owner account before sending transaction. Do it from node
        var txResult = await airdropContract.methods.multisend(addresses, amounts).send({from :owner, gas:6000000, gasPrice:"50000000000"});
    }catch(error){
        console.log(error);
        throw error;
    }
}

var startScript = async() => {

   
    //1. Transfer tokens
    await transferTokens();
    console.log("Tokens transferred to new token");

    //2. Cross check balance of receivers
    await crossCheckBalances();
    console.log("Post Transfer Check-up complete!!");
    console.log("END!!");
}

startScript();
