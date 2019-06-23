/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     6/23/2019 6:01:24 PM                         */
/*==============================================================*/


drop table if exists AUCTIONDAILY;

drop table if exists AUCTIONMONTHLY;

drop table if exists AUCTIONYEARLY;

drop table if exists COMMERCIALFLOWS;

drop table if exists CONSUMPTION;

drop table if exists COUNTRY;

drop table if exists PHYSICALFLOW;

drop table if exists PRODUCTION;

drop table if exists RELATIONSHIP_4;

drop table if exists RELATIONSHIP_5;

drop table if exists RELATIONSHIP_6;

drop table if exists RELATIONSHIP_7;

drop table if exists RELATIONSHIP_8;

drop table if exists SPOT;

/*==============================================================*/
/* Table: AUCTIONDAILY                                          */
/*==============================================================*/
create table AUCTIONDAILY
(
   AUCTIONYEARLYID3     int not null,
   AUCTIONDAILYCODE     varchar(32),
   AUCTIONDAILYDISPLAY  varchar(32),
   AUCTIONDAILYTIME     timestamp,
   AUCTIONDAILYVALUE    decimal(10,3),
   AUCTIONDAILYCAPACITY decimal(10,3),
   AUCTIONDAILYMEASURE1 varchar(32),
   AUCTIONDAILYMEASURE2 varchar(32),
   primary key (AUCTIONYEARLYID3)
);

/*==============================================================*/
/* Table: AUCTIONMONTHLY                                        */
/*==============================================================*/
create table AUCTIONMONTHLY
(
   AUCTIONYEARLYID2     int not null,
   AUCTIONDAILYCODE     varchar(32),
   AUCTIONDAILYDISPLAY  varchar(32),
   AUCTIONDAILYTIME     timestamp,
   AUCTIONDAILYVALUE    decimal(10,3),
   AUCTIONDAILYCAPACITY decimal(10,3),
   AUCTIONDAILYMEASURE1 varchar(32),
   AUCTIONDAILYMEASURE2 varchar(32),
   primary key (AUCTIONYEARLYID2)
);

/*==============================================================*/
/* Table: AUCTIONYEARLY                                         */
/*==============================================================*/
create table AUCTIONYEARLY
(
   AUCTIONYEARLYID      int not null,
   AUCTIONDAILYCODE     varchar(32),
   AUCTIONDAILYDISPLAY  varchar(32),
   AUCTIONDAILYTIME     timestamp,
   AUCTIONDAILYVALUE    decimal(10,3),
   AUCTIONDAILYCAPACITY decimal(10,3),
   AUCTIONDAILYMEASURE1 varchar(32),
   AUCTIONDAILYMEASURE2 varchar(32),
   primary key (AUCTIONYEARLYID)
);

/*==============================================================*/
/* Table: COMMERCIALFLOWS                                       */
/*==============================================================*/
create table COMMERCIALFLOWS
(
   COMMERCIALFLOWID     int not null,
   PHYSICALFLOWCODE     varchar(32),
   PHYSICALFLOWDISPLAY  varchar(32),
   PHYSICALFLOWMEASURE  varchar(32),
   PHYSICALFLOWTIME     timestamp,
   PHYSICALFLOWVALUE    decimal(10,3),
   primary key (COMMERCIALFLOWID)
);

/*==============================================================*/
/* Table: CONSUMPTION                                           */
/*==============================================================*/
create table CONSUMPTION
(
   CONSUMPTIONID        int not null,
   COUNTRYID            int,
   CONSUMPTIONCODE      varchar(32),
   CONSUMPTIONDISPLAY   varchar(32),
   CONSUMPTIONMEASURE   varchar(32),
   CONSUMPTIONTIME      timestamp,
   CONSUMPTIONPOTENCIAL decimal(10,3),
   CONSUMPTIONREALISED  decimal(10,3),
   primary key (CONSUMPTIONID)
);

/*==============================================================*/
/* Table: COUNTRY                                               */
/*==============================================================*/
create table COUNTRY
(
   COUNTRYID            int not null,
   COUNTRYCODE          varchar(32),
   COUNTRYDISPLAY       varchar(32),
   COUNTRYMEASURE       varchar(32),
   primary key (COUNTRYID)
);

/*==============================================================*/
/* Table: PHYSICALFLOW                                          */
/*==============================================================*/
create table PHYSICALFLOW
(
   COMMERCIALFLOWID2    int not null,
   PHYSICALFLOWCODE     varchar(32),
   PHYSICALFLOWDISPLAY  varchar(32),
   PHYSICALFLOWMEASURE  varchar(32),
   PHYSICALFLOWTIME     timestamp,
   PHYSICALFLOWVALUE    decimal(10,3),
   primary key (COMMERCIALFLOWID2)
);

/*==============================================================*/
/* Table: PRODUCTION                                            */
/*==============================================================*/
create table PRODUCTION
(
   PRODUCTIONID         int not null,
   COUNTRYID            int,
   PRODUCTIONCODE       varchar(32),
   PRODUCTIONMEASURE    varchar(32),
   PRODUCTIONTIME       timestamp,
   PRODUCTIONVALUE      decimal(10,3),
   PRODUCTIONTYPE       varchar(32),
   PRODUCTIONSUBTYPE    varchar(32),
   PRODUCTIONDISPLAY    varchar(32),
   primary key (PRODUCTIONID)
);

/*==============================================================*/
/* Table: RELATIONSHIP_4                                        */
/*==============================================================*/
create table RELATIONSHIP_4
(
   COUNTRYID            int not null,
   COMMERCIALFLOWID     int not null,
   primary key (COUNTRYID, COMMERCIALFLOWID)
);

/*==============================================================*/
/* Table: RELATIONSHIP_5                                        */
/*==============================================================*/
create table RELATIONSHIP_5
(
   COUNTRYID            int not null,
   COMMERCIALFLOWID2    int not null,
   primary key (COUNTRYID, COMMERCIALFLOWID2)
);

/*==============================================================*/
/* Table: RELATIONSHIP_6                                        */
/*==============================================================*/
create table RELATIONSHIP_6
(
   COUNTRYID            int not null,
   AUCTIONYEARLYID2     int not null,
   primary key (COUNTRYID, AUCTIONYEARLYID2)
);

/*==============================================================*/
/* Table: RELATIONSHIP_7                                        */
/*==============================================================*/
create table RELATIONSHIP_7
(
   COUNTRYID            int not null,
   AUCTIONYEARLYID3     int not null,
   primary key (COUNTRYID, AUCTIONYEARLYID3)
);

/*==============================================================*/
/* Table: RELATIONSHIP_8                                        */
/*==============================================================*/
create table RELATIONSHIP_8
(
   COUNTRYID            int not null,
   AUCTIONYEARLYID      int not null,
   primary key (COUNTRYID, AUCTIONYEARLYID)
);

/*==============================================================*/
/* Table: SPOT                                                  */
/*==============================================================*/
create table SPOT
(
   SPOTID               int not null,
   COUNTRYID            int,
   SPOTCODE             varchar(32),
   SPOTDISPLAY          varchar(32),
   SPOTMEASURE          varchar(32),
   SPOTTIME             timestamp,
   SPOTVALUE            decimal(10,3),
   primary key (SPOTID)
);

alter table CONSUMPTION add constraint FK_RELATIONSHIP_2 foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID) on delete restrict on update restrict;

alter table PRODUCTION add constraint FK_RELATIONSHIP_3 foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID) on delete restrict on update restrict;

alter table RELATIONSHIP_4 add constraint FK_RELATIONSHIP_4 foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID) on delete restrict on update restrict;

alter table RELATIONSHIP_4 add constraint FK_RELATIONSHIP_5 foreign key (COMMERCIALFLOWID)
      references COMMERCIALFLOWS (COMMERCIALFLOWID) on delete restrict on update restrict;

alter table RELATIONSHIP_5 add constraint FK_RELATIONSHIP_6 foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID) on delete restrict on update restrict;

alter table RELATIONSHIP_5 add constraint FK_RELATIONSHIP_7 foreign key (COMMERCIALFLOWID2)
      references PHYSICALFLOW (COMMERCIALFLOWID2) on delete restrict on update restrict;

alter table RELATIONSHIP_6 add constraint FK_RELATIONSHIP_8 foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID) on delete restrict on update restrict;

alter table RELATIONSHIP_6 add constraint FK_RELATIONSHIP_9 foreign key (AUCTIONYEARLYID2)
      references AUCTIONMONTHLY (AUCTIONYEARLYID2) on delete restrict on update restrict;

alter table RELATIONSHIP_7 add constraint FK_RELATIONSHIP_10 foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID) on delete restrict on update restrict;

alter table RELATIONSHIP_7 add constraint FK_RELATIONSHIP_11 foreign key (AUCTIONYEARLYID3)
      references AUCTIONDAILY (AUCTIONYEARLYID3) on delete restrict on update restrict;

alter table RELATIONSHIP_8 add constraint FK_RELATIONSHIP_12 foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID) on delete restrict on update restrict;

alter table RELATIONSHIP_8 add constraint FK_RELATIONSHIP_13 foreign key (AUCTIONYEARLYID)
      references AUCTIONYEARLY (AUCTIONYEARLYID) on delete restrict on update restrict;

alter table SPOT add constraint FK_RELATIONSHIP_1 foreign key (COUNTRYID)
      references COUNTRY (COUNTRYID) on delete restrict on update restrict;

