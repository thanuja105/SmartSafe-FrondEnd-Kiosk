import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Insertbills, Role, StoreInfoRequest, User } from '../config/Model';
import { ValetDenominationsDto,GetStandBankRequestValues,ChangeValetDenominations,ChangeRequestDto,ChangeRequest,TruckChangeRequestDto} from 'src/app/config/Standbank';
import { EndPoints } from '../config/EndPoints';
@Injectable({
  providedIn: 'root'
})
export class Service {
 
  

  constructor(private httpClient: HttpClient) { }

  doLogin(user: User) {
    return this.httpClient.post<User>(EndPoints.DO_LOGIN(), user);
  }
  SaveChangeRequestValues(ChangeRequestDto:ChangeRequestDto){
    return this.httpClient.post(EndPoints.ADD_ChangeDrequest(),ChangeRequestDto);
  }
  SavetructChangeRequest(truckChangeRequestDto:TruckChangeRequestDto){
    return this.httpClient.post(EndPoints.SAVE_TRUCKChangeDrequest(),truckChangeRequestDto);
  }
  GetChangerequestStatus(OrderStatus:string){
    return this.httpClient.get<ChangeRequest>(EndPoints.GET_CHANGE_REQUEST_STATUS(OrderStatus));
  }
  addUser(user:User){
      return this.httpClient.post(EndPoints.ADD_USER(),user);
  }
  standBankService(valetDenominationsDto:ValetDenominationsDto){
    return this.httpClient.post(EndPoints.ADD_ChangeRequest(),valetDenominationsDto);
  }
  MainSaveChangeDenominiesValues(changeValetDenominations:ChangeValetDenominations){
    return this.httpClient.post(EndPoints.ADD_ChangeDenominies(),changeValetDenominations);
  }
  ShiftSaveChangeDenominiesValues(changeValetDenominations:ChangeValetDenominations){
    return this.httpClient.post(EndPoints.ADD_ChangeDenominies(),changeValetDenominations);
  }
  SaveChangeDenominiesValues(changeValetDenominations:ChangeValetDenominations){
    return this.httpClient.post(EndPoints.ADD_ChangeDenominies(),changeValetDenominations);
  }
  changeRequestDenominiesValues(changeValetDenominations:ChangeValetDenominations){
    return this.httpClient.post(EndPoints.ADD_ChangeDenominies(),changeValetDenominations);
  }
  cancelRequestDenominiesValues(truckChangeRequestDto:TruckChangeRequestDto){
    return this.httpClient.post(EndPoints.CANCEL_ChangeDenominies(),truckChangeRequestDto);
  }
  getStandBankDetailsOnType(type:string){
    return this.httpClient.get<GetStandBankRequestValues>(EndPoints.GET_STANDBANK_DETAILS(type));
  }
  getAllDenominations(){
    return this.httpClient.get<Array<GetStandBankRequestValues>>(EndPoints.GET_ALLDENOMINATIONS());
  }
  getAllDenominationss(){
    return this.httpClient.get<any>(EndPoints.GET_ALLDENOMINATIONS());
  }

  GetChangerequestAll(){
    return this.httpClient.get<Array<ChangeRequest>>(EndPoints.GET_CHANGEREQUESTALLSTATUS());
  }

  GetChangerequestAlll(){
    return this.httpClient.get<any>(EndPoints.GET_CHANGEREQUESTALLSTATUS());
  }

  users(){
      return this.httpClient.get<Array<User>>(EndPoints.LIST_USERS());
  }

  findUserByRole(role:string){
    return this.httpClient.get<Array<User>>(EndPoints.FIND_USER_BY_ROLE(role));
  }

  deleteByUser(userId: number){
    return this.httpClient.delete(EndPoints.DELETE_USER_BY_ROLE(userId));
  }
  
  getIncompleteInsertBills() {
    return this.httpClient.get<Array<Insertbills>>(EndPoints.INCOMPLETE_INSERT_BILLS());
  }


  processInsertBills(userId: number) {
    return this.httpClient.post<any>(EndPoints.PROCESS_INSERT_BILLS(userId),{});
  }

  managerBillReport(dateRequest: any) {
    return this.httpClient.post<any>(EndPoints.MANAGER_BILL_REPORT(), dateRequest);
  }
  gotoManagerReport(userId:string,data:any){
    return this.httpClient.post<any>(EndPoints.PRINT_MANAGER_REPORT(userId),data);
  }

  getStandBankService(type:string,userId:string,data:any){
    return this.httpClient.post<any>(EndPoints.PRINT_STANDBANK_REPORT(type,userId),data);
  }
  getStandBankInterService(userId:string,data:any){
    return this.httpClient.post<any>(EndPoints.PRINT_STANDBANKInter_REPORT(userId),data);
  }
  getChangeRequestService(OrderStatus:string,userId:string,data:any){
    return this.httpClient.post<any>(EndPoints.PRINT_CHANGEREQUEST_REPORT(OrderStatus,userId),data);
  }

  insertBillsReportData(transactionNUmber:string){
    return this.httpClient.get<any>(EndPoints.INSERTBIILS_REPORT(transactionNUmber));
  }
  insertBillsReportDataa(transactionNUmber:string,storeName:any){
    return this.httpClient.get<any>(EndPoints.INSERTBIILS_REPORTT(transactionNUmber,storeName));
  }
  printTestReport(storeName:any){
    return this.httpClient.get<any>(EndPoints.PRINT_TEST_REPORT(storeName));
  }  

  rePrintReceipt(storeName:any){
    return this.httpClient.get<any>(EndPoints.RE_PRINT_RECEIPT(storeName));
  }
  printEndOfTheReport(userId:number){
    return this.httpClient.get<any>(EndPoints.END_OF_THE_DAY_REPORT(userId),{})
  }

  gotoEmployeeReport(userId:string,data:any){
    return this.httpClient.post<any>(EndPoints.PRINT_EMPLOYEE_REPORT(userId),data);
  }

  getChangerequestExcelReport(path:string) :Observable<Blob>{
    return this.httpClient.get(EndPoints.GETCHANGEREQUESTREPORT(path),{responseType: 'blob'});
  }
  getStandBankReport(path:string) :Observable<Blob>{
    return this.httpClient.get(EndPoints.GETSTANDBANKREPORT(path),{responseType: 'blob'});
  }


  getUserByRoles(request:any){
    return this.httpClient.post<Array<User>>(EndPoints.GET_USER_BY_ROLES(),request);
  }

  getUserByRolesStoreName(storeName:any,roles:any){
    return this.httpClient.get<Array<User>>(EndPoints.GET_USER_BY_ROLESStore(storeName,roles));
  }

  getUserByRoless(storeName:any,request:any){
    return this.httpClient.post<Array<User>>(EndPoints.GET_USER_BY_ROLESs(storeName),request);
  }
  
  
  getStoreByStoreName(storeName:string){
    return this.httpClient.get<any>(EndPoints. GET_STORE_BY_STORENAME(storeName));
   
  }
  getStores(){
    return this.httpClient.get<Array<StoreInfoRequest>>(EndPoints.LIST_STORES());
  }

  configureStore(storeInfoRequest:StoreInfoRequest){
    return this.httpClient.post<StoreInfoRequest>(EndPoints.CONFIGURE_STORE(),storeInfoRequest);
  }
  promote(userId:number,role:Role){
    return this.httpClient.post<Role>(EndPoints.PROMOTE_USER(userId),role);

  }

  openLock(id:string){
    return this.httpClient.get<any>(EndPoints.OPEN_LOCK(id))
  }

  kioskMac(){
    return this.httpClient.get<any>(EndPoints.GET_KIOSK_MAC())
  }

  basedOnDays(days:number){
    return this.httpClient.get<any>(EndPoints.BASED_ON_DAYS(days))
  }

  assignStoreKiosk(storeId:any,kioskId:any){
    return this.httpClient.get<any>(EndPoints.ASSIGN_STORE_KIOSK(storeId,kioskId))
  }
  
  findstoredetail(storeName:any){
    return this.httpClient.get<any>(EndPoints.find_storedetail(storeName))
  }

  lockInfo(userId:any,type:any){
    return this.httpClient.get<any>(EndPoints.Lock_Info(userId,type))
  }

  usertolockInfo(userId:any){
    return this.httpClient.get<any>(EndPoints.User_to_Lock_Info(userId))
  }

  remote_local(){
    return this.httpClient.get<any>(EndPoints.fetching_remote_local())
  }


}