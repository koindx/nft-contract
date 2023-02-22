import { Base58, MockVM, chain, protocol, token, Protobuf, StringBytes, system_calls } from "@koinos/sdk-as";
import { Collections } from '../Collections';
import { collections } from '../proto/collections';

// contract
const CONTRACT_ID = Base58.decode("17TAwcuJ4tHc9TmCbZ24nSMvY9bPxwQq5s");
// address
const MOCKADRESS = Base58.decode("13nxuEi19W8sfjQiaPLSv2ht2WVp6dNyhn");
// tokens
const MOCKTOKENA = Base58.decode("1M6NjRHh5x926wZUXYUz86x6j5MBqQJAvQ");
const MOCKTOKENB = Base58.decode("1H88naibGSwCbxnXB3MpYSdiEChKducag3");
const MOCKTOKENC = Base58.decode("1BrPkP7JhBwT4MuRDMWiiysGEu4XkyXuCH");

describe("limit", () => {
  beforeEach(() => {
    MockVM.reset();
    MockVM.setContractId(CONTRACT_ID);
    // set transaction
    let headInfo = new chain.head_info();
    headInfo.head_block_time = 123456789;
    headInfo.last_irreversible_block = 3;
    MockVM.setHeadInfo(headInfo);
    let _transaction = new protocol.transaction();
    let header = new protocol.transaction_header();
    header.payer = MOCKADRESS;
    _transaction.id = StringBytes.stringToBytes("0x12345");
    _transaction.header = header;
    MockVM.setTransaction(_transaction);
  });

  it("should mint token with price cap", () => {
    let _coll = new Collections();

    let contractResults: system_calls.exit_arguments[] = [];
    contractResults.push(new system_calls.exit_arguments(0, new chain.result( Protobuf.encode(new token.transfer_result(), token.transfer_result.encode) )));

    MockVM.setCallContractResults(contractResults);
    let args1 = new collections.mint_arguments(MOCKTOKENA, 195);
    let res1 = _coll.mint(args1);
    expect(res1.value).toBe(true);

    MockVM.setCallContractResults(contractResults);
    let args2 = new collections.mint_arguments(MOCKTOKENB, 20);
    let res2 = _coll.mint(args2);
    expect(res2.value).toBe(true);
  });


});
