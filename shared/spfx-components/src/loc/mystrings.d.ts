declare interface ILocalizeTestWebPartStrings {
  GreetingsFormat: string;
}

declare module 'LocalizeTestWebPartStrings' {
  const strings: ILocalizeTestWebPartStrings;
  export = strings;
}
