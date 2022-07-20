const humanReadableWithTradeFirstOpened =
  '<![CDATA[\n\nDEV@SPRINGFINANCIAL         TRANS UNION OF CANADA                          \r\n                           Consumer Credit Report               Date:31Jan2022\r\n\r\n          Surname             Given Name(s)       Soc.Ins.No.   Birth\r\nSubject   KOKUBUN             DARIN                             24Jul1956\r\n\r\nOn File   Last Inq           Current Residence    Telephone     Prev phone\r\n06Mar2008 000000000                               5198830520                   \r\n\r\n-- Residence(s) ---------------------------------------------------------------\r\nStreet                        City           Prov Postal    Since     Cnfrm\r\n2 ELDERWOOD DR                RICHMOND HILL  ON   L4B2X3    Oct2021   Jan2022\r\n15 JOLETTE AVE                AZILDA         ON   P0M1B0    Dec2006   Dec2021\r\n\r\n-- File summary ---------------------------------------------------------------\r\nBankruptcies               1-Nov2020     Registered Items            0-0000000\r\nLegal Items                0-0000000     Inquiries                   0-0000000\r\nCollections                0-0000000     Collection Inquiries        0\r\nBanking Closed For Cause   0-0000000     Inquiries within 6 Months   0\r\n\r\nTrade First Opened           Nov2009     Current Negative Trade      0\r\nTrade Last Opened            Dec2013     Paid Trade                  0\r\n\r\nType  Count HighCred   CredLimit  Balance    PastDue    Payment    Available\r\nR        2  n/a        $275,000   $3,620     $0         $150       98%\r\nO        0  $0         n/a        $0         $0         $0         n/a\r\nI        0  $0         n/a        $0         $0         $0         n/a\r\nM        0  $0         n/a        $0         $0         $0         n/a\r\nTotal    2  $0         $275,000   $3,620     $0         $150       n/a\r\n\r\nHigh Risk Fraud Alert  : Clear\r\n\r\nCreditVision Risk Score: 661\r\n Factors               :  43 Presence of bankruptcy delinquency or derogatory it\r\n Factors               :  39 Presence of balance on credit card accounts\r\n\r\n-- Trade ----------------------------------------------------------------------\r\n                                                      Payment Pattern\r\nReptd    Open    Last    H.Credit Balance  PastDue Terms    30/60/90/#M    MOP\r\n   BB  ROYAL BANK OF CANADA,4169742159                111111111111111111111111\r\nDec2021  Nov2009 Dec2021 250000   120      0       50/M      0  0  0 38    R1\r\n                                                                               \r\n\r\n   BC  TORONTO DOMINION BANK VISA,8005658472          111111111111111111111111\r\nDec2021  Dec2013 Dec2021 25000    3500     0       100/M     0  0  0 62    R1\r\n                                                                               \r\n\r\n-- Bankruptcy and Insolvency --------------------------------------------------\r\nRvsd     Reptd     Trustee                        Assets  Liab\r\nJan2022  09Nov2020 HARRY HOUDINI                  10      320000\r\n                 DISAPPEARANCE TRUST\r\n                 9051113321                       BANKRUPT\r\n                                                  312560122\r\n\r\nThis completes the file for DARIN KOKUBUN\r\n]]>';
const humanReadableWithoutTradeFirstOpened = `
<![CDATA[

  TEST                        TRANS UNION OF CANADA                          
                             Consumer Credit Report               Date:16Mar2012
  
            Surname             Given Name(s)       Soc.Ins.No.   Birth
  Subject   CONSUMER            ROBERT                            05May1964
                                                                                 
  X-Ref
  AKA       SMITH               ROBERT
  
  On File   Last Inq           Current Residence    Telephone     Prev phone
  15Nov2005 19Feb2012                               9055720000    9055720000     
  
  -- Residence(s) ---------------------------------------------------------------
  Street                        City           Prov Postal    Since     Cnfrm
  171 JACKSON ST E              HAMILTON       ON   L8N1L4    Nov2009   Feb2012
  171 JACKSON ST E              HAMILTON       ON   L8N1L4    Nov2009   Feb2012
  171 JACKSON ST E              HAMILTON       ON   L8N1L4    Oct2009   Feb2012
  
  -- Employment(s) --------------------------------------------------------------
  Employers Name & Address                Occupation          Since     Cnfrm
  ABC, TORONTO, ON                        LABOURER                      02Feb2012
  BBB, HAMILTON, ON                                                     02Feb2012
  BBBBBB, ON                                                            02Feb2012
  ABCDEFG, ON                                                           02Feb2012
  CCCCCCCC, ON                                                          02Feb2012
  
  -- File summary ---------------------------------------------------------------
  Legal=2-May2011 Bkrp=0-0000000 Col=1-Mar2011 Inqs=11-Feb2012 6Mnth=2 CollInq=0
  High=$33500 Baln=$12528 Pdue=$0 Paym=$250 Acct=8 Neg=2 Paid=4
  Trade=Oct1993/Feb2012 Balances Inst=$1500 Rev=$11028 Open=$0 Mort=$0 #Reg=1
  
  -- Banking - Closed For Cause -------------------------------------------------
  Reptd    Open     WriteOff Amount   Reason
     BB    ROYAL BANK OF CANADA,9055485700
  Feb2012  Mar2009           0
  
  -- Trade ----------------------------------------------------------------------
                                                        Payment Pattern
  Reptd    Open    Last    H.Credit Balance  PastDue Terms    30/60/90/#M    MOP
     DC  THE BAY                                        11111111111111111111111X
  Feb2012  Mar2002 Feb2012 1000     28               M         1  0  0 48    R1
                             HAS CO-SIGNER
  
     BB  BANK OF MONTREAL,6139842981                    111111111111111111111131
  Feb2012  Feb2012 Feb2012          1500             M         0  1  0 38    I1
                                                                                 
  
     BB  TORONTO DOMINION BANK,8005633995               876541111111111111111111
  Feb2012  Oct1993 Apr2010 15000    11000    0       0/M       0  0  0 65    R8
                             LEASE, VOLUNTARY REPO
  
     BC  HSBC M/C,8664064722                            111111111111111000000000
  Feb2012  Oct2009 Feb2012 500                       M         0  0  0 30    R1
                             CLOSED CONSUMER'S REQUEST
  
     DC  SEARS,8006868224                               111111111111111111111111
  Feb2012  Feb2006 Jul2008 1500     0        0       150/M     0  0  0 35    I1
                             PAID, ACCT CLOSED
  
     DC  SIMPSONS,6046892130                            999543211111111111111111
  Feb2012  Oct2001 Nov2010 500      0        0       100/M     1  1  5 55    I9
                             SETTLED, BAD DEBT WRITE OFF
  
     BC  TD/GM VISA,4169824600                          111111111111111111111111
  Nov2010  Apr2009 Nov2010 0        0        0       0/M       0  0  0 44    R1
                                                                                 
  
     BB  HSBC BANK CANADA,6048957100                    111111111111111111
  Jul2008  Oct2005 Jul2008 15000    0        0       0/M       0  0  0 18    R1
                             PAID
  
  -- Registered Items -----------------------------------------------------------
  Reptd    Open    Matur   Amount                        Security                
     BB  *Member information currently not available*                            
  Feb2012  Jul2008 Sep2008 15000                                                 
  
  -- Legal items ----------------------------------------------------------------
  Rvsd     Reptd     Plaintiff's Name               Amount  Balance
  Feb2012  May2011   XBXBXBBXBXB                    100                          
                     YORKTON, SK, SUPREME COURT     BALANCE NOT AVAILABLE,       
                     JUDG, 1364964619                                            
  
  Feb2012  Jan2008   ABCDEFG                        500                          
                     HAMILTON                       BALANCE NOT AVAILABLE, Feb2008
                     JUDG, 12345                    STILL OWING                  
  
  -- Collections ----------------------------------------------------------------
  Rvsd     Reptd   Creditor's Name                  Amount  Balance
  Feb2012  Mar2011 ATLANTIC COLLECT/DR H TOOTH DECAY1500    1500
                                                    STILL OWING
                                                                                 
  
  -- Inquiries ------------------------------------------------------------------
    Date    Credit Grantor
  19Feb2012 BR ROYAL BANK OF CANADA,9056646412
  19Jan2012 BB CDN IMPERIAL BK OF COMMERCE,6046651949
  13Jul2009 FZ HOME TRUST COMPANY,8777276883
  19Nov2008 DC SEARS,8006868224
  19Nov2008 DC WFFRS/TRU SERV,4163825472
  05Oct2008 BC BANK OF MONTREAL M/C
  09Aug2008 BC ROYAL BANK OF CANADA VISA,8002688046
  08Jul2008 ZZ ROGERS WIRELESS,8002672070
  06Mar2006 AT CANADIAN TIRE FINANCIAL SERVICES,9057353131
  11Feb2006 BB CITIBANK CANADA,4169472900
  04Jan2006 BB HSBC BANK CANADA,6048957100
  
  -- Remarks --------------------------------------------------------------------
    Date    Information
  02Feb2012 #HK# CONFIRMED FRAUD VICTIM; BEFORE EXTENDING CREDIT VERIFY ALL
  02Feb2012 #HK# APPLICANT INFORMATION. CONTACT CONSUMER FOR VERIFICATION AT
  02Feb2012 #HK# HOME: (416) 332-1122 HOME ALTERNATE: (416) 332-1122 DATED
  02Feb2012 #HK# 11/2006 VICTIME CONFIRMEE DE FRAUDE: NE PAS ACCORDER DE CREDIT
  02Feb2012 #HK# SANS VERIFIER TOUTES LES INFORMATIONS DU POSTULANT. DE PLUS,
  02Feb2012 #HK# COMMUNIQUER AVEC LE CONSOMMATEUR DIRECTEMENT A DOMICILE POUR
  02Feb2012 #HK# VERIFICATION AU: (416) 332-1122 DOMICILE ALTERNATE: (416)
  02Feb2012 #HK# 332-1122 DATE 11/2006 CONFIRMED FRAUD VICTIM; BEFORE EXTENDING
  02Feb2012 #HK# CREDIT VERIFY ALL APPLICANT INFORMATION. CONTACT CONSUMER FOR
  02Feb2012 #HK# VERIFICATION AT HOME: (416) 332-1122 DATED 11/2006  VICTIME
  02Feb2012 #HK# CONFIRMEE DE FRAUDE: NE PAS ACCORDER DE CREDIT SANS  VERIFIER
  02Feb2012 #HK# TOUTES LES INFORMATIONS DU POSTULANT. DE PLUS, COMMUNIQUER AVEC
  02Feb2012 #HK# LE CONSOMMATEUR DIRECTEMENT A DOMICILE POUR VERIFICATION AU:
  02Feb2012 #HK# (416) 332-1122 DATE 11/2006
  02Feb2012 GEN  TYPE:CHEQUING ACCT MEMBER_CODE:903BB1952 ACCOUNT_NUMBER:123456
  02Feb2012 GEN  OPEN:AUG03 ACCOUNT_BAL:HI5 %UTILIZED:75 STATUS:FULLY UTILIZED
  02Feb2012 GEN  NARRATIVE:BALANCE NOT AVAILABLE DETAIL_INFO:FREE FORM TEXT FOR
  02Feb2012 GEN  ADDTIONAL NOTES
  
  This completes the file for ROBERT CONSUMER
  ]]>`;

module.exports = {
  humanReadableWithTradeFirstOpened,
  humanReadableWithoutTradeFirstOpened,
};
