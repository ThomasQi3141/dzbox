package types

type UploadPasteRequest struct {
	FileHash 	string `json:"fileHash"`
	TTL         int64  `json:"ttl"`
    HasPassword bool   `json:"hasPassword"`
    Password    string `json:"password,omitempty"`
}


type UploadPasteResponse struct {
    ShortCode string `json:"shortCode"`
}

