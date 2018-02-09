class Api::CommentsController < ApplicationController

  before_action :require_login, only: [:create]

  def index
    @comments = Comment.where(:article_id => params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    @comment.article = Article.find_by(id: params[:articleId])
    if @comment.save!
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
