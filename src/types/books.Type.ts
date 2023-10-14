type IndustryIdentifierType = {
  type: string
  identifier: string
}

type ReadingModesType = {
  text: boolean
  image: boolean
}

type PanelizationSummarytype = {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
  epubBubbleVersion?: string
  imageBubbleVersion?: string
}

type ImageLinksType = {
  smallThumbnail: string
  thumbnail: string
}

type VolumeSeriesType = {
  seriesId?: string
  seriesBookType?: string
  orderNumber?: number
}

type SeriesInfoType = {
  kind?: string
  bookDisplayNumber?: string
  volumeSeries?: VolumeSeriesType
}

type VolumeInfoType = {
  title?: string
  subtitle?: string
  authors?: string[]
  publisher?: string
  publishedDate: string
  description: string
  industryIdentifiers: IndustryIdentifierType[]
  readingModes?: ReadingModesType
  pageCount?: number
  printType: string
  categories?: string[]
  averageRating?: number
  ratingsCount?: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary?: PanelizationSummarytype
  imageLinks: ImageLinksType
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
  seriesInfo?: SeriesInfoType[]
}

type SalePriceType = {
  amount: number
  currencyCode: string
}

type OfferPriceType = {
  amountInMicros: number
  currencyCode: string
}

type OfferType = {
  finskyOfferType: number
  listPrice: OfferPriceType
  retailPrice: OfferPriceType
}

type SaleInfoType = {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: SalePriceType
  retailPrice?: SalePriceType
  buyLink?: string
  offers?: OfferType[]
}

type FormatInfoType = {
  isAvailable: boolean
  acsTokenLink?: string
}

type AccessInfoType = {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: FormatInfoType
  pdf: FormatInfoType
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

type SearchInfoType = {
  textSnippet: string
}

export type BookType = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfoType
  saleInfo: SaleInfoType
  accessInfo: AccessInfoType
  searchInfo: SearchInfoType
}

export type BooksType = {
  kind: string
  totalItems: number
  items: BookType[]
}